from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import json, logging, os
from pymongo import MongoClient

mongo_uri = 'mongodb://' + os.environ["MONGO_HOST"] + ':' + os.environ["MONGO_PORT"]
db = MongoClient(mongo_uri)['test_db']

collection = db.todosCollection

# collection 
todosCollection = db.todosCollection
class TodoListView(APIView):

    def get(self, request):
        # Implement this method - return all doc items from db instance above.
        global todosCollection
        res = []
        doc = todosCollection.find()
        for item in doc:
            res.append({'title' : item["title"]})
        return Response(res, status=status.HTTP_200_OK)
        
    def post(self, request):
        global todosCollection
        if request.method == 'POST':
            todosCollection.insert_one(request.res).inserted_id
            return Response('OK!!!',status=status.HTTP_200_OK)
        return Response("error", status=status.HTTP_400_BAD_REQUEST)