import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function Shadcn() {
  return (  <>

    <div className="flex flex-col gap-4 ">
      <Button>Click me</Button>
      <Button disabled>Click me</Button>
      <Button variant="secondary">Click me</Button>
      <Button disabled variant="secondary">
        Click me
      </Button>
      <Button variant="link">Click me</Button>
      <Button disabled variant="link">
        Click me
      </Button>
      <Input type="email" placeholder="Email" />
      <Input type="file" placeholder="File" />
      <Input disabled type="email" placeholder="Email" />
    </div> 
    </>






  );
}

export default Shadcn;