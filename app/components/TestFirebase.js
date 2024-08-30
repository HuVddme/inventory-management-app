// /app/components/TestFirebase.js
import { auth } from '@/app/firebase';

export default function TestFirebase() {
  console.log(auth); // This should not throw an error if Firebase is correctly initialized
  return <div>Firebase Test Component</div>;
}
