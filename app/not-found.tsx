import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";
import Link from "next/link";

const EmptyInputGroup = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Empty>
        <EmptyHeader>
          <EmptyTitle>404 - Not Found</EmptyTitle>
          <EmptyDescription>
            The page you&apos;re looking for doesn&apos;t exist.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <EmptyDescription>
            Go back to the{" "}
            <Link href="/" className="text-primary underline">
              homepage.
            </Link>
          </EmptyDescription>
        </EmptyContent>
      </Empty>
    </div>
  );
};

export default EmptyInputGroup;
