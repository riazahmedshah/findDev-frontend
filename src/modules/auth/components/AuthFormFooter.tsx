
interface authFormFooterProps{
  backButtonLabel:string;
  backButtonHref:string;
}

export const AuthFormFooter = ({backButtonHref, backButtonLabel}:authFormFooterProps) => {
  return(
    <div>
      {backButtonHref}
      {backButtonLabel}
    </div>
  )
}