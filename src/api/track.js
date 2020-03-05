import request from "@/services/axios"

export function searchTrack(q, offset = 0) {
  return request({
    url: "/search",
    method: "GET",
    params: {
      q,
      type: "track",
      offset
    }
  })
}
