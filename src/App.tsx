import { AppLayout } from "@/AppLayout"
import { AppRoutes } from "@/AppRoutes"

/** Client app: shared chrome + lazy, per-route code-split page chunks. */
function App() {
  return (
    <AppLayout>
      <AppRoutes />
    </AppLayout>
  )
}

export default App
