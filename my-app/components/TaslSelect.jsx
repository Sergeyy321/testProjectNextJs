import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon, CheckIcon } from "@radix-ui/react-icons";

export default function TaskSelect({ value, onChange }) {
  return (
    <Select.Root value={value} onValueChange={onChange}>
      <Select.Trigger
        className="
          inline-flex items-center justify-between
          px-3 py-2 min-w-[140px]
          rounded-md text-sm
          bg-gray-900 text-gray-100
          border border-gray-700
          hover:bg-gray-800
          active:bg-gray-800
          focus-visible:outline-none
          focus-visible:ring-2 focus-visible:ring-blue-500
        "
      >
        <Select.Value />
        <ChevronDownIcon className="text-gray-400" />
      </Select.Trigger>

      <Select.Content
        className="
          bg-gray-900 border border-gray-700
          rounded-md shadow-lg
          overflow-hidden
        "
      >
        <Select.Viewport>
          <SelectItem value="all">All tasks</SelectItem>
          <SelectItem value="done">Done</SelectItem>
          <SelectItem value="undone">Undone</SelectItem>
        </Select.Viewport>
      </Select.Content>
    </Select.Root>
  );
}

function SelectItem({ children, value }) {
  return (
    <Select.Item
      value={value}
      className="
        px-3 py-2 text-sm
        cursor-pointer
        flex items-center justify-between
        text-gray-100
        hover:bg-gray-800
        focus:bg-gray-800
        outline-none
      "
    >
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator>
        <CheckIcon className="text-blue-500" />
      </Select.ItemIndicator>
    </Select.Item>
  );
}
