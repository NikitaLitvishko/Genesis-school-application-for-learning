export const COURSES_PER_PAGE = 10;
export const API_URL_LIST =
  "https://api.wisey.app/api/v1/core/preview-courses/";

const header = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";
const body =
  "eyJzdWIiOiJkOTRlNjg4NS1kM2U5LTQwY2EtYTVjYy01MDRkNjZlZDVlN2QiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg3MDQ3NjIsImV4cCI6MTY3OTYwNDc2Mn0";
const signature = "Qw3LF39CDp27ZxoGzt5rikJM_OTx0eNaoyFFLxxrXUM";
export const API_TOKEN = [header, body, signature].join(".");
