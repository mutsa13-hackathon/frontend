import instance from "./instance";

export async function createMatch(requesterId, matchData) {
  try {
    const res = await instance.post(`/api/match?requesterId=${requesterId}`, matchData);
    console.log(" 매칭 생성 성공:", res.data);
    return res.data;
  } catch (error) {
    console.error("매칭 생성 실패:", error);
    throw error;
  }
}