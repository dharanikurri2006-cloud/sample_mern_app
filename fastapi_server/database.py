from pymongo import MongoClient
import os # to access env variable
from dotenv import load_dotenv
load_dotenv()
client=MongoClient(os.getenv("MONGO_URL"))#used to connect w our mongodb connection
#connect w our db
db=client["vignan_db"]
#connect with collection
student_collection=db["students"]
staff_collection=db["staff"]