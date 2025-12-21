import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import { Button } from "./button";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

const TablePagination = ({
  currentPage,
  totalPages,
  pageSize,
  onPageSizeChange,
  onPageChange,
  selectedCount,
}: any) => {
  return (
    <div className="flex items-center justify-between py-4 px-2">
      <div className="text-sm text-muted-foreground">
        {selectedCount} of {pageSize} row(s) selected.
      </div>

      <div className="flex items-center space-x-2">
        <span className="text-sm font-semibold">Rows per page</span>
        <Select
          value={pageSize.toString()}
          onValueChange={(value) => onPageSizeChange?.(parseInt(value))}
        >
          <SelectTrigger className="w-20">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="5">5</SelectItem>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="20">20</SelectItem>

            <SelectItem value="50">50</SelectItem>
            <SelectItem value="100">100</SelectItem>
          </SelectContent>
        </Select>

        <span className="text-sm font-semibold">
          Page {currentPage} of {totalPages}
        </span>

        <div className="flex items-center space-x-1">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onPageChange(1)}
            disabled={currentPage === 1}
            className="h-8 w-8 p-0"
          >
            <ChevronsLeft />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="h-8 w-8 p-0"
          >
            <ChevronLeft />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="h-8 w-8 p-0"
          >
            <ChevronRight />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onPageChange(totalPages)}
            disabled={currentPage === totalPages}
            className="h-8 w-8 p-0"
          >
            <ChevronsRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TablePagination;
