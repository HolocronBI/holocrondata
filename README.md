# Holocron Data — Setup Guide

## Local development

```bash
npm install
npm run dev
```

## Deploy

Push to `main` → Vercel auto-deploys.

---

## One-time setup: Daily Blog Automation

The GitHub Action generates a new blog post every morning at 09:00 German time and opens a Pull Request for your review.

### Step 1 — Add Anthropic API key to GitHub Secrets

1. Go to your repo: **Settings → Secrets and variables → Actions**
2. Click **New repository secret**
3. Name: `ANTHROPIC_API_KEY`
4. Value: your API key from [console.anthropic.com](https://console.anthropic.com)
5. Save

### Step 2 — Enable GitHub Actions write permissions

1. Go to **Settings → Actions → General**
2. Scroll to **Workflow permissions**
3. Select **Read and write permissions**
4. Check **Allow GitHub Actions to create and approve pull requests**
5. Save

### Step 3 — Test it

1. Go to **Actions → Daily Blog Post → Run workflow**
2. Click **Run workflow**
3. After ~30 seconds, check **Pull requests** — your first AI-generated post should be there

### How to approve a post

1. Open the Pull Request
2. Click **Files changed** to read the post
3. If it looks good → click **Merge pull request**
4. Vercel deploys in ~60 seconds → live on holocrondata.net/blog

### To pause the automation

Go to **Actions → Daily Blog Post → ⋯ → Disable workflow**

---

## Project structure

```
src/
  layouts/
    Base.astro          # Nav + footer wrapper
    BlogPost.astro      # Blog post wrapper
  pages/
    index.astro         # Main site (all sections)
    blog.astro          # Blog index
    blog/
      *.md              # Blog posts (auto-generated here)
  styles/
    global.css          # All styles
.github/
  workflows/
    daily-blog-post.yml # The automation
```
