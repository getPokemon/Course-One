import request from './request'
export async function getUse(){
    return request.get("/api/user")
}