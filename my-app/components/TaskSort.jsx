import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export default function TaskSort({ value, onChange }) {
  return (
    <div className="flex flex-col gap-1 w-48">
      {/* Label */}
      <label className="text-sm text-gray-400">
        Priority
      </label>

      <Select.Root value={value} onValueChange={onChange}>
        <Select.Trigger
          className="
            inline-flex items-center justify-between
            px-3 py-2 rounded-md text-sm
            bg-gray-900 text-gray-100
            border border-gray-700
            hover:bg-gray-800
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
            <Select.Item
              value="asc"
              className="
                px-3 py-2 text-sm text-gray-100
                cursor-pointer
                hover:bg-gray-800
                focus:bg-gray-800
                outline-none
              "
            >
              <Select.ItemText>Priority ↑</Select.ItemText>
            </Select.Item>

            <Select.Item
              value="desc"
              className="
                px-3 py-2 text-sm text-gray-100
                cursor-pointer
                hover:bg-gray-800
                focus:bg-gray-800
                outline-none
              "
            >
              <Select.ItemText>Priority ↓</Select.ItemText>
            </Select.Item>
          </Select.Viewport>
        </Select.Content>
      </Select.Root>
    </div>
  );
}
