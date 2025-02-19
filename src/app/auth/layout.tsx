const Layout = ({children} : {children : React.ReactNode} ) => {
    return <div className="flex h-full items-center justify-center  bg-gradient-to-r from-teal-400 to-blue-500">
        {children}</div>
}

export default Layout;