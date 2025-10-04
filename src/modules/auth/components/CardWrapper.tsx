import { Card, CardContent, CardFooter, CardHeader } from "@ui/card";
import { AuthFormHeader } from "./AuthFormHeader";
import { AuthFormFooter } from "./AuthFormFooter";


interface cardWrapperProps{
  title:string;
  label:string;
  backButtonHref:string;
  backButtonLabel:string;
  children: React.ReactNode
}

export const CardWrapper = ({
  title, 
  label, 
  children, 
  backButtonLabel, 
  backButtonHref
}: cardWrapperProps) => {
  return(
    <Card className="shadow-md">
      <CardHeader>
        <AuthFormHeader 
          title={title} 
          label={label} 
        />
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      <CardFooter>
        <AuthFormFooter 
          backButtonLabel={backButtonLabel} 
          backButtonHref={backButtonHref}
        />
      </CardFooter>
    </Card>
  )
}