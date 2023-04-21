import { MantineProvider, Title, Center, Stack } from '@mantine/core'
import { Provider as StoreProvider } from 'react-redux'

import { store } from 'store'
import { Users } from 'components/Users'

function App() {
  return (
    <StoreProvider store={store}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Stack align="center" spacing="xl">
          <Title order={1}>This is h1 title</Title>
          <Users />
        </Stack>
      </MantineProvider>
    </StoreProvider>
  )
}

export default App
