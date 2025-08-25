import axios from '@/api/axiosInstance';

export type MemberInterestPayload = {
  birthDate: string;
  location: string;
  interests: string[];
};

export type MemberInterestGet = {
  birthDate?: string;
  location?: string;
  interests?: string[];
};

export async function getMemberInterest() {
  const { data } = await axios.get<MemberInterestGet>('/api/v1/member/interest');
  return data;
}

export async function putMemberInterest(payload: MemberInterestPayload) {
  return axios.put('/api/v1/member/interest', payload);
}
