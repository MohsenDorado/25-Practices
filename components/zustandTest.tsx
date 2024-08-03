"use client"
import usePersonStore from "@/context/store"



function App() {
    // "select" the needed state and actions, in this case, the firstName value
    // and the action updateFirstName
    const firstName = usePersonStore((state) => state.firstName)
    const updateFirstName = usePersonStore((state) => state.updateFirstName)
  
    return (
      <main>
        <label>
          First name
          <input
            // Update the "firstName" state
            onChange={(e) => updateFirstName(e.currentTarget.value)}
          />
        </label>
  
        <p>
          Hello, <strong>{firstName}!</strong>
        </p>
      </main>
    )
  }
  export default App;