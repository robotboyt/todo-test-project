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


@app.post('/items/create/', response_model=TodoItem)
async def create_item(item: TodoItemCreate):
    new_id = simpleDB[-1].id + 1 if simpleDB else 1
    new_item = TodoItem(name=item.name, id=new_id)
    simpleDB.append(new_item)
    return new_item


@app.delete("/items/delete/{todo_id}")
async def delete_item(todo_id: int):
    for i, item in enumerate(simpleDB):
        if item.id == todo_id:
            del simpleDB[i]
            return {"message": "Article deleted"}
        

@app.put("/items/update/{todo_id}")
async def update_item(updated_item: TodoItem, todo_id: int):
    for i, item in enumerate(simpleDB):
        if item.id == todo_id:
            simpleDB[i] = updated_item
            return updated_item