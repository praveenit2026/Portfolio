import { createClient } from '@supabase/supabase-js';
const supabaseUrl = "https://uxpbayetdkiumrvufeqb.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4cGJheWV0ZGtpdW1ydnVmZXFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEzNDE1MjksImV4cCI6MjA4NjkxNzUyOX0.vyf_yKDIbIlNFLm43iZ3Cy4J0lHKj8pq_BrYp-n-k-M";

const supabase = createClient(supabaseUrl, supabaseKey);

async function testInsert() {
  console.log("Attempting to insert a test message (without .select())...");
  const { error } = await supabase
    .from('contact_messages')
    .insert({
      name: 'Script Test No Select',
      email: 'script-no-select@example.com',
      subject: 'Script Subject',
      message: 'Script Message'
    });

  if (error) {
    console.error('Error inserting message:', error);
  } else {
    console.log('Insert successful (probably)!');
  }
}

testInsert();
// checkMessages();
