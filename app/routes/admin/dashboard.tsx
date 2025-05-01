import { Header } from "../../../components"

const Dashboard = () => {
  const user = { name: "Alexis" } // Example user object

  return (
    <main className="dashboard wrapper">
      <Header 
        title={`Welcome ${user?.name ?? 'Guest'} 👋`}	
        description="This is your dashboard. You can manage your account, view statistics, and more."
        
      />

      Dashboard content here
    </main>
  )
}

export default Dashboard