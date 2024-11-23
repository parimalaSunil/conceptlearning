import { createClient } from "@/utils/supabase/server";
import Hero from "@/components/hero";


export default async function Index() {
  const canInitSupabaseClient = () => {
   
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <main>
       <Hero/>
    </main>
  );
}
