from fastapi import APIRouter

from database import student_collection
from models import Student_model
student_router=APIRouter(prefix="/student",tags=["student"])

#localhost:8000/student/addstudent
@student_router.post("/addStudent")
def addStudent(stu:Student_model):

    result=student_collection.insert_one(stu.model_dump())
    #model_dump used to convert class fields into dict
    return "student inserted success"

#localhost:8000/student/getstudent
@student_router.get("/getStudent")
def getStudent():
    return "get student method called"
#localhost:8000/student/updateStudent =>put
@student_router.put("/updatestudent")
def updateStudent():
    return "update student method called"
#localhost:8000/student/deleteStudent => delete
@student_router.delete("/deletestudent")
def deletestudent():
    return "delete student method called"