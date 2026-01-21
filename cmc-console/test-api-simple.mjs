/**
 * Simple LLM API test
 * Tests the connection using the same code as the API route
 */

import OpenAI from 'openai';
import { readFileSync } from 'fs';

// Read .env.local manually
const envContent = readFileSync('.env.local', 'utf-8');
const envVars = {};
envContent.split('\n').forEach(line => {
  const match = line.match(/^([^#=]+)=(.*)$/);
  if (match) {
    envVars[match[1].trim()] = match[2].trim();
  }
});

const apiKey = envVars.OPENAI_API_KEY;
const model = envVars.LLM_MODEL || 'gpt-4';

console.log('🧪 Testing LLM API Connection...\n');
console.log(`Provider: OpenAI`);
console.log(`Model: ${model}`);
console.log(`API Key: ${apiKey ? apiKey.substring(0, 15) + '...' : 'NOT FOUND'}\n`);

if (!apiKey || apiKey.includes('your-openai-api-key')) {
  console.log('❌ API key not configured properly');
  process.exit(1);
}

try {
  const openai = new OpenAI({ apiKey });
  
  console.log('📡 Making test API call...\n');
  
  const response = await openai.chat.completions.create({
    model: model,
    messages: [
      { 
        role: 'system', 
        content: 'You are a test assistant. Respond briefly.' 
      },
      { 
        role: 'user', 
        content: 'Say "Connection successful!" if you can read this message.' 
      }
    ],
    max_tokens: 50,
    temperature: 0.7,
  });
  
  const message = response.choices[0]?.message?.content;
  
  console.log('✅ Connection successful!\n');
  console.log('Response:', message);
  console.log('\n🎉 LLM API is working correctly!');
  console.log('You can now use the app with full LLM functionality.\n');
  
} catch (error) {
  console.log('❌ API call failed:\n');
  console.log('Error:', error.message);
  
  if (error.status === 401) {
    console.log('\n💡 This usually means the API key is invalid.');
  } else if (error.status === 429) {
    console.log('\n💡 Rate limit exceeded. Wait a moment and try again.');
  } else {
    console.log('\n💡 Check your API key and network connection.');
  }
  
  process.exit(1);
}

