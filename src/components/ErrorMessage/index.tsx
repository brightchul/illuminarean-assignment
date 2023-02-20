import WarningOutlined from "@ant-design/icons/WarningOutlined";

interface ErrorMessageProps {
  message?: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <p className="flex item-center gap-1 text-red-500">
      <WarningOutlined className="flex items-center" />
      <span>{message}</span>
    </p>
  );
}
