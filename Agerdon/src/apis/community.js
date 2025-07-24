import instance from "./instance";


export async function fectchAllCommunity() {
  try{
    const res = await instance.get("/api/article");
    return res.data;
    
  } catch(err) {
    console.error(err);
  }
}