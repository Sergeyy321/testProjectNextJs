import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Dot } from "lucide-react";

export default function TaskMenu({ onDelete }) {
  return (
    <div >
      <DropdownMenu.Root>
        <DropdownMenu.Trigger
          className="
            p-1 rounded
            text-gray-400
            hover:bg-gray-800
            hover:text-gray-200
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-gray-600
          "
        >
          
          <DotsHorizontalIcon  />
        </DropdownMenu.Trigger>

        <DropdownMenu.Content
          side="bottom"
          align="end"
          className="
          bg-gray-900
          border border-gray-700
          rounded-md
          shadow-lg
          p-1
          z-50
          "
        >
          
          <DropdownMenu.Item
            onSelect={onDelete}
            className="
            px-4 py-2
            text-sm text-red-400
            rounded
            cursor-pointer
            outline-none
            hover:bg-gray-800
            focus:bg-gray-800
            "
          >
            Delete
          </DropdownMenu.Item>
        </DropdownMenu.Content>

      </DropdownMenu.Root>
    </div>
  );
}
