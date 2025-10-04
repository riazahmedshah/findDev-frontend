interface authFormHeaderProps{
  title:string;
  label:string;
}

export const AuthFormHeader = ({label, title}:authFormHeaderProps) => {
  return(
    <div className="w-full flex flex-col gap-y-4 justify-center items-center">
      <h1 className="text-3xl font-semibold">{title}</h1>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  )
}