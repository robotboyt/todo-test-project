from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins={"http://localhost:3000"},
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class TodoItem(BaseModel):
    name: str
    id: int


class TodoItemCreate(BaseModel):
    name: str


simpleDB: list[TodoItem] = [ 
    TodoItem(name='make an a cake', id=1),
    TodoItem(name='walk with a dog', id=2)
    ]


@app.get('/items/')
async def get_todo():
    return simpleDB