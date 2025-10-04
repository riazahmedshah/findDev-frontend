interface authFormHeaderProps{
  title:string;
  label:string;
}

export const AuthFormHeader = ({label, title}:authFormHeaderProps) => {
  return(
    <div>
      {label}
      {title}
    </div>
  )
}