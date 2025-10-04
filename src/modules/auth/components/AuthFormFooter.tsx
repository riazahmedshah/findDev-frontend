import { Button } from "@ui/button";
import { Link } from "react-router-dom";

interface authFormFooterProps{
  label:string;
  href:string;
}

export const AuthFormFooter = ({label, href}:authFormFooterProps) => {
  return(
    <Button variant="link" className="font-normal w-full" size="sm" asChild>
      <Link to={href}>
          {label}
      </Link>
    </Button>
  )
}