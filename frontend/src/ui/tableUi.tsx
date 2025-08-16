import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

// eslint-disable-next-line react-refresh/only-export-components
export enum Status {
  Pending = "pending",
  Done = "done",
  Cancelled = "cancelled",
}

interface Todo {
  id: number;
  icon: string;
  itemName: string;
  status: Status;
  price: number;
  isEditing?: boolean;
}

export function TableUI() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");
  const [icon, setIcon] = useState("🛒");
  const [status, setStatus] = useState<Status>(Status.Pending);

  const addTodo = () => {
    if (!itemName.trim() || !price) return;
    setTodos([
      ...todos,
      {
        id: Date.now(),
        icon,
        itemName,
        status: Status.Pending,
        price: parseFloat(price),
      },
    ]);
    setItemName("");
    setPrice("");
    setIcon("🛒");
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const startEditing = (id: number) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, isEditing: true } : { ...t, isEditing: false }
      )
    );
  };

  const saveEdit = (
    id: number,
    updated: Partial<Omit<Todo, "id" | "isEditing">>
  ) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, ...updated, isEditing: false } : t
      )
    );
  };

  return (
    <>
      <div>
        {/* Add new product */}
        {/* List */}
      </div>
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">Icon</TableHead>
            <TableHead className="w-[200px]">ItemName</TableHead>
            <TableHead className="w-[200px]">Status</TableHead>
            <TableHead className="">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {todos.map((todo) => (
            <TableRow
              key={todo.id}
              className="text-black items-center bg-white-100 p-6 rounded gap-5"
            >
              {todo.isEditing ? (
                <>
                  <TableCell>
                    <Input
                      placeholder="Icon (e.g. 🛒)"
                      defaultValue={todo.icon}
                      onChange={(e) => setIcon(e.target.value)}
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      defaultValue={todo.itemName}
                      onChange={(e) => setItemName(e.target.value)}
                    />
                  </TableCell>
                  <TableCell>
                    <select
                      defaultValue={todo.status}
                      onChange={(e) => setStatus(e.target.value as Status)}
                      className="border p-2 rounded"
                    >
                      <option value={Status.Pending}>Pending</option>
                      <option value={Status.Done}>Done</option>
                      <option value={Status.Cancelled}>Cancelled</option>
                    </select>
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      defaultValue={todo.price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </TableCell>
                  <TableCell>
                    <Button
                      size="sm"
                      onClick={() =>
                        saveEdit(todo.id, {
                          icon,
                          itemName,
                          status,
                          price: Number(price),
                        })
                      }
                    >
                      Save
                    </Button>
                  </TableCell>
                </>
              ) : (
                <>
                  <TableCell className="font-medium">{todo.icon}</TableCell>
                  <TableCell>{todo.itemName}</TableCell>
                  <TableCell
                    className={`text-sm px-2 py-1 rounded ${
                      todo.status === Status.Pending
                        ? "bg-yellow-200 text-yellow-900"
                        : todo.status === Status.Done
                        ? "bg-green-200 text-green-900"
                        : "bg-red-200 text-red-900"
                    }`}
                  >
                    {todo.status}
                  </TableCell>
                  <TableCell> ₹{todo.price.toFixed(2)}</TableCell>

                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => startEditing(todo.id)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => removeTodo(todo.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </>
              )}
            </TableRow>
          ))}
          {/* {todos.map((todo) => (
            
          ))} */}
        </TableBody>
      </Table>

      {/* Dialog footer */}
      <div className="w-full max-w-full">
        <footer className="float-right mt-4">
          <Dialog>
            <form>
              <DialogTrigger asChild>
                <Button variant="outline">Add Item</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-white">
                <DialogHeader>
                  <DialogTitle>Add Item</DialogTitle>
                  <DialogDescription>
                    Add your Item here. Click save when you&apos;re done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                  <div className="grid gap-3">
                    <Label htmlFor="name-1">Icon</Label>
                    <Input
                      placeholder="Icon (e.g. 🛒)"
                      value={icon}
                      onChange={(e) => setIcon(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="username-1">Item name</Label>
                    <Input
                      placeholder="Item name"
                      onChange={(e) => setItemName(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="username-1">Status</Label>
                    <select
                      value={status}
                      onChange={(e) => setStatus(e.target.value as Status)}
                      className="border p-2 rounded"
                    >
                      <option value={Status.Pending}>Pending</option>
                      <option value={Status.Done}>Done</option>
                      <option value={Status.Cancelled}>Cancelled</option>
                    </select>
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="username-1">Price</Label>
                    <Input
                      placeholder="Price"
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button onClick={addTodo}>Add Item</Button>
                </DialogFooter>
              </DialogContent>
            </form>
          </Dialog>
        </footer>
      </div>
    </>
  );
}
