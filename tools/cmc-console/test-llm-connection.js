/**
 * Test script for LLM API connection
 * Run with: node test-llm-connection.js
 */

require('dotenv').config({ path: '.env.local' });

async function testLLMConnection() {
  console.log('🧪 Testing LLM API Connection...\n');
  
  // Check environment variables
  const provider = process.env.LLM_PROVIDER || 'openai';
  const model = process.env.LLM_MODEL || 'gpt-4';
  
  console.log(`Provider: ${provider}`);
  console.log(`Model: ${model}\n`);
  
  if (provider === 'openai') {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey || apiKey.includes('your-openai-api-key')) {
      console.log('❌ OPENAI_API_KEY not configured or still has placeholder value');
      console.log('   Please set your actual API key in .env.local\n');
      return false;
    }
    console.log(`✅ API Key found: ${apiKey.substring(0, 10)}...`);
    
    try {
      const { default: OpenAI } = await import('openai');
      const openai = new OpenAI({ apiKey });
      
      console.log('\n📡 Testing API call...');
      const response = await openai.chat.completions.create({
        model: model,
        messages: [
          { role: 'system', content: 'You are a test assistant.' },
          { role: 'user', content: 'Say "Connection successful" if you can read this.' }
        ],
        max_tokens: 50,
      });
      
      const message = response.choices[0]?.message?.content;
      console.log(`\n✅ Connection successful!`);
      console.log(`Response: ${message}\n`);
      return true;
    } catch (error) {
      console.log(`\n❌ API call failed:`);
      console.log(`   ${error.message}\n`);
      return false;
    }
  } else if (provider === 'anthropic') {
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey || apiKey.includes('your-anthropic-api-key')) {
      console.log('❌ ANTHROPIC_API_KEY not configured or still has placeholder value');
      console.log('   Please set your actual API key in .env.local\n');
      return false;
    }
    console.log(`✅ API Key found: ${apiKey.substring(0, 10)}...`);
    console.log('\n📡 Testing API call...');
    
    try {
      const Anthropic = (await import('@anthropic-ai/sdk')).default;
      const anthropic = new Anthropic({ apiKey });
      
      const response = await anthropic.messages.create({
        model: model,
        max_tokens: 50,
        messages: [
          { role: 'user', content: 'Say "Connection successful" if you can read this.' }
        ],
      });
      
      const message = response.content[0]?.type === 'text' ? response.content[0].text : 'No text';
      console.log(`\n✅ Connection successful!`);
      console.log(`Response: ${message}\n`);
      return true;
    } catch (error) {
      console.log(`\n❌ API call failed:`);
      console.log(`   ${error.message}\n`);
      return false;
    }
  } else {
    console.log(`❌ Unsupported provider: ${provider}`);
    console.log('   Supported: openai, anthropic, local\n');
    return false;
  }
}

testLLMConnection().catch(console.error);

