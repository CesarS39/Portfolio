#!/bin/bash
# Setup completo de Claude Code para el rediseño del portafolio
# Ejecutar desde la raíz del proyecto: bash setup-claude-code.sh

echo "🚀 Configurando Claude Code para el portafolio..."

# 1. Crear estructura de directorios .claude
mkdir -p .claude/skills/frontend-design
mkdir -p .claude/agents

echo "📁 Directorios creados"

# 2. Descargar el skill oficial de frontend-design de Anthropic
curl -s -o .claude/skills/frontend-design/SKILL.md \
  https://raw.githubusercontent.com/anthropics/claude-code/main/plugins/frontend-design/skills/frontend-design/SKILL.md

echo "🎨 Skill frontend-design instalado"

# 3. Crear settings.json con el hook de build automático
cat > .claude/settings.json << 'EOF'
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit|MultiEdit",
        "hooks": [
          {
            "type": "command",
            "command": "cd $(git rev-parse --show-toplevel) && npm run build 2>&1 | tail -5"
          }
        ]
      }
    ]
  }
}
EOF

echo "⚡ Hook de build configurado"

# 4. Instalar dependencias de Three.js y animaciones
echo "📦 Instalando dependencias de animaciones..."
npm install three gsap

echo ""
echo "✅ Setup completo. Ahora:"
echo "   1. Coloca el CLAUDE.md en la raíz del proyecto (si no lo has hecho)"
echo "   2. Abre Claude Code: claude"
echo "   3. Primer prompt sugerido abajo 👇"
echo ""
echo "💬 Primer prompt para Claude Code:"
echo "────────────────────────────────────────"
echo "Lee el CLAUDE.md completo y empieza el rediseño."
echo "Respeta Astro 7 y Tailwind 4 con @tailwindcss/vite. Revisa primero"
echo "src/styles/global.css, tailwind.config.js y CLAUDE.md antes de tocar tokens."
echo "Reutiliza src/components/3d/HeroScene.astro y Three.js directamente;"
echo "no generes una implementación React ni agregues cursores personalizados."
echo "────────────────────────────────────────"
