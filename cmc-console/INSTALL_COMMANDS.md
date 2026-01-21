# Installation Commands

## Fix: Install Xcode Command Line Tools

The `better-sqlite3` package requires Xcode Command Line Tools to compile. Run this command:

```bash
xcode-select --install
```

This will open a dialog - click "Install" and wait for it to complete.

## After Command Line Tools are installed

Then run:

```bash
cd /Users/robertkuhne/Documents/CIV–MEM/cmc-console
npm install
```

## Alternative: If xcode-select --install doesn't work

If the above doesn't work, you may need to accept the license or reinstall:

```bash
sudo xcode-select --reset
xcode-select --install
```

Or download directly from Apple Developer:
https://developer.apple.com/download/all/

## Alternative: Use a different database (if issues persist)

If you continue having issues with `better-sqlite3`, we could switch to a pure JavaScript SQLite library, though it will be slower. Let me know if you want this option.

