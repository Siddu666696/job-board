import { Card, Skeleton, Stack } from '@mui/material'

const ListSkeleton = () => {
  return (
    <Stack spacing={2} sx={{ py: 2 }} aria-live="polite">
            {Array.from({ length: 5 }).map((_, i) => (
              <Card key={i} variant="outlined" sx={{ p: 2 }}>
                <Skeleton variant="text" width="60%" height={28} />
                <Skeleton variant="text" width="40%" />
                <Skeleton variant="rectangular" height={60} sx={{ mt: 1 }} />
              </Card>
            ))}
          </Stack>
  )
}

export default ListSkeleton