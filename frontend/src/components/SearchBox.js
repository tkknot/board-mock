import { Button } from "./Button";

export const SearchBox = () => {
  return (
    <div className="pt-2 pl-4">
      <input type='search' className="rounded-sm" />
      <Button text="検索" style='btn-sm ml-2' />
    </div>
  );
};
