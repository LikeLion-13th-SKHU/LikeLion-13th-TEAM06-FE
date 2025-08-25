import axios from "@/api/axiosInstance";

export type MemberInterestPayload = {
  birthDate: string;      // yyyy-MM-dd
  location: string;       // 지역 문자열
  interests: string[];    // 서버 코드 배열
};

export type MemberInterestGet = {
  birthDate?: string;     // yyyy.MM.dd | yyyy-MM-dd | ISO 등
  location?: string;
  interests?: string[];
};

export async function getMemberInterest() {
  const { data } = await axios.get<MemberInterestGet>("/api/v1/member/interest");
  return data;
}

export async function putMemberInterest(payload: MemberInterestPayload) {
  return axios.put("/api/v1/member/interest", payload);
}
