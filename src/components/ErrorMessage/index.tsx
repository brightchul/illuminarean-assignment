import WarningOutlined from "@ant-design/icons/WarningOutlined";

interface ErrorMessageProps {
  message?: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <p className="flex item-center text-red-500">
      <WarningOutlined />
      <span>{message}</span>
    </p>
  );
}
