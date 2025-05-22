import AlgebraTestPage from '../../../../components/dashboard/student/test-algebra/AlgebraTestPage'

import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
   <Suspense fallback={<div>Loading test...</div>}>
      <AlgebraTestPage />
    </Suspense>
    </div>
  )
}

export default page