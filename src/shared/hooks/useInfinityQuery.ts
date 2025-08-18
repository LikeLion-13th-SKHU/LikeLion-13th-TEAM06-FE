// src/shared/hooks/useInfinityQuery.ts

import { useInfiniteQuery, type QueryKey } from '@tanstack/react-query';
import type { SpringPage } from '@/shared/api/paging';
import { getHasNextPage } from '@/shared/api/paging';

type FetchPageFn<T, Params> = (args: {
  page: number;
  size: number;
  params: Params;
}) => Promise<SpringPage<T>>;

type UseOffsetInfiniteOptions<T, Params> = {
  queryKey: QueryKey;
  fetchPage: FetchPageFn<T, Params>;
  size?: number;
  startPage?: number;
  params: Params;
  staleTime?: number;
};

export function useOffsetInfinite<T, Params>({
  queryKey,
  fetchPage,
  size = 20,
  startPage = 0,
  params,
  staleTime = 60_000,
}: UseOffsetInfiniteOptions<T, Params>) {
  return useInfiniteQuery({
    queryKey: [...queryKey, params, size, startPage],
    queryFn: ({ pageParam = startPage }) => fetchPage({ page: pageParam, size, params }),
    getNextPageParam: (lastPage, allPages) => {
      if (!getHasNextPage(lastPage)) return undefined;
      const nextClientPage = (allPages[allPages.length - 1].number ?? startPage - 1) + 1;
      return nextClientPage + 1 * 0;
    },
    staleTime,
    initialPageParam: startPage,
  });
}
