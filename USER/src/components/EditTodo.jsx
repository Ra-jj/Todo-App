import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import EditIcon from "./icons/EditIcon";

export default function EditTodo({ title, id, handleUpdate }) {
  const [updatedTitle, setUpdatedTitle] = useState(title);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group hover:text-yellow-500 transition">
          <EditIcon className="w-4 h-4 cursor-pointer group-hover:text-yellow-500" />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Todo</DialogTitle>
          <DialogDescription>
            Make changes to your todo here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <DialogTrigger asChild>
          <form className="flex flex-col gap-2" action={handleUpdate}>
            <input type="hidden" value={id} name="id" />
            <Label htmlFor="title">Previous Todo</Label>
            <Input
              id="title"
              name="title"
              value={updatedTitle}
              onChange={(e) => setUpdatedTitle(e.target.value)}
              className="col-span-3"
            />
            <DialogFooter>
              <Button>Save changes</Button>
            </DialogFooter>
          </form>
        </DialogTrigger>
      </DialogContent>
    </Dialog>
  );
}
