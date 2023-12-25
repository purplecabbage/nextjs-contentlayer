"use client"

import { useCallback, useState } from 'react';


// import { Label } from "@/components/ui/label"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Button } from "@/components/ui/button"


export default async function CommentEntry() {

  const [success, setSuccess] = useState<boolean | undefined>();
  

  try {
    const response = await fetch(`/api/comment`, {
      method: 'GET'
    }
  );
  console.log('response is: ', response )
    setSuccess(true);
  } catch {
    setSuccess(false);
  }

  return (
    <></>
  )
}