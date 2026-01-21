# LLM API Integration Setup

The CMC Console integrates with Large Language Models (LLMs) to enable dialogue through the cognitive lens of loaded SCHOLAR files.

## Supported Providers

1. **OpenAI** (GPT-4, GPT-3.5-turbo)
2. **Anthropic** (Claude 3 Opus, Sonnet, Haiku)
3. **Local LLM** (Ollama, etc.)

## Configuration

### Option 1: OpenAI (Recommended)

1. Get your API key from https://platform.openai.com/api-keys
2. Create or edit `.env.local` in the `cmc-console` directory:

```bash
LLM_PROVIDER=openai
OPENAI_API_KEY=sk-your-api-key-here
LLM_MODEL=gpt-4
```

### Option 2: Anthropic

1. Get your API key from https://console.anthropic.com/
2. Create or edit `.env.local`:

```bash
LLM_PROVIDER=anthropic
ANTHROPIC_API_KEY=sk-ant-your-api-key-here
LLM_MODEL=claude-3-opus-20240229
```

### Option 3: Local LLM (Ollama)

1. Install and run Ollama: https://ollama.ai/
2. Pull a model: `ollama pull llama2`
3. Create or edit `.env.local`:

```bash
LLM_PROVIDER=local
LOCAL_LLM_URL=http://localhost:11434/api/chat
LLM_MODEL=llama2
```

## How It Works

1. **SCHOLAR File as Cognitive Lens**: The loaded SCHOLAR file content is injected into the system prompt, shaping how the LLM responds.

2. **Mode-Specific Behavior**: 
   - **IMAGINE**: Creative visualization and immersive exploration, option generation, no belief creation
   - **LEARN**: Belief extraction, structured logging, SCHOLAR updates
   - **WRITE**: Canonical artifact generation, ARC compliance

3. **Context Awareness**:
   - Selected MEM files are included in context
   - Conversation history is maintained (last 10 messages)
   - Mode constraints are enforced

## Testing

After configuration, restart the dev server:

```bash
npm run dev
```

Then:
1. Select a SCHOLAR mode (IMAGINE, LEARN, or WRITE)
2. Load a SCHOLAR file (e.g., CIV–SCHOLAR–ROME.md)
3. Start a conversation in the interface

The LLM will respond through the cognitive lens of the loaded SCHOLAR file, respecting mode constraints.

## Troubleshooting

- **"LLM API not configured"**: Check that your `.env.local` file exists and has the correct variables
- **API errors**: Verify your API key is valid and has credits/quota
- **Local LLM not working**: Ensure Ollama is running and the model is pulled

