from fastapi import APIRouter
staff_router=APIRouter(prefix="/staff",tags=["staff"])
#localhost:8000/staff/addStaff
@staff_router.post("/addStaff")
def addStaff():
    return "add staff method called"
#localhost:8000/staff/getstaff
@staff_router.get("/getstaff")
def getstaff():
    return "get staff method called"
#localhost:8000/staff/updatestaff =>put
@staff_router.put("/updatestaff")
def updatestaff():
    return "update staff method called"
#localhost:8000/staff/deletestaff => delete
@staff_router.delete("/deletestaff")
def deletestaff():
    return "delete staff method called"