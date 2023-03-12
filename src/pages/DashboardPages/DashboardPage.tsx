function DashboardPage({children} : {children: JSX.Element | JSX.Element[]}) {
  return (
    <div className="w-full h-screen flex flex-col">
      {children}
    </div>
  )
}

export default DashboardPage
