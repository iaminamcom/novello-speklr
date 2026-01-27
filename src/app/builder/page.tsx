'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { ThemeProvider, useTheme, defaultTheme, ThemeConfig } from '@/context/ThemeContext';
import { Icon } from '@/components/Icon';

const fontOptions = [
  { value: 'OpenSauce', label: 'Open Sauce (Default)' },
  { value: 'Inter', label: 'Inter' },
  { value: 'Roboto', label: 'Roboto' },
  { value: 'Playfair Display', label: 'Playfair Display' },
  { value: 'Poppins', label: 'Poppins' },
  { value: 'Montserrat', label: 'Montserrat' },
];

function BuilderForm() {
  const router = useRouter();
  const { theme, setTheme, resetTheme } = useTheme();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState<ThemeConfig>({
    ...defaultTheme,
    ...theme,
  });

  const [logoPreview, setLogoPreview] = useState<string>(formData.logo);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setLogoPreview(result);
        setFormData(prev => ({ ...prev, logo: result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogoUrl = (url: string) => {
    setLogoPreview(url);
    setFormData(prev => ({ ...prev, logo: url }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTheme(formData);
    router.push('/builder/preview');
  };

  const handleReset = () => {
    resetTheme();
    setFormData(defaultTheme);
    setLogoPreview(defaultTheme.logo);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <a href="/" className="p-2 rounded-lg hover:bg-surface transition-colors">
            <Icon id="menu-summary" width={24} height={24} />
          </a>
          <div>
            <h1 className="text-3xl font-bold">Site Builder</h1>
            <p className="text-white/60 mt-1">Customize your branding and create your site</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <section className="bg-surface rounded-2xl p-6 space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Icon id="menu-gallery" width={24} height={24} className="text-primary" />
              Logo
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-white/60 mb-2">Upload Image</label>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleLogoUpload}
                    accept="image/*"
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full py-3 px-4 border-2 border-dashed border-white/20 rounded-xl hover:border-primary transition-colors text-white/60 hover:text-primary"
                  >
                    Click to upload logo
                  </button>
                </div>

                <div>
                  <label className="block text-sm text-white/60 mb-2">Or paste URL</label>
                  <input
                    type="url"
                    placeholder="https://example.com/logo.png"
                    onChange={(e) => handleLogoUrl(e.target.value)}
                    className="w-full py-3 px-4 bg-surface-elevated rounded-xl border border-white/10 focus:border-primary outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="bg-surface-elevated rounded-xl p-4 flex items-center justify-center min-h-30">
                {logoPreview ? (
                  <img src={logoPreview} alt="Logo preview" className="max-w-full max-h-20 object-contain" />
                ) : (
                  <span className="text-white/40">Logo preview</span>
                )}
              </div>
            </div>
          </section>

          <section className="bg-surface rounded-2xl p-6 space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Icon id="star-filled" width={24} height={24} className="text-primary" />
              Colors
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm text-white/60">Primary Color</label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={formData.primaryColor}
                    onChange={(e) => setFormData(prev => ({ ...prev, primaryColor: e.target.value }))}
                    className="w-14 h-14 rounded-xl cursor-pointer border-0 bg-transparent"
                  />
                  <input
                    type="text"
                    value={formData.primaryColor}
                    onChange={(e) => setFormData(prev => ({ ...prev, primaryColor: e.target.value }))}
                    className="flex-1 py-3 px-4 bg-surface-elevated rounded-xl border border-white/10 focus:border-primary outline-none transition-colors font-mono"
                  />
                </div>
                <p className="text-xs text-white/40">Used for buttons, links, and accents</p>
              </div>

              <div className="space-y-2">
                <label className="block text-sm text-white/60">Secondary Color</label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={formData.secondaryColor}
                    onChange={(e) => setFormData(prev => ({ ...prev, secondaryColor: e.target.value }))}
                    className="w-14 h-14 rounded-xl cursor-pointer border-0 bg-transparent"
                  />
                  <input
                    type="text"
                    value={formData.secondaryColor}
                    onChange={(e) => setFormData(prev => ({ ...prev, secondaryColor: e.target.value }))}
                    className="flex-1 py-3 px-4 bg-surface-elevated rounded-xl border border-white/10 focus:border-primary outline-none transition-colors font-mono"
                  />
                </div>
                <p className="text-xs text-white/40">Used for elevated surfaces and backgrounds</p>
              </div>
            </div>

            <div className="mt-4 p-4 rounded-xl" style={{ backgroundColor: formData.secondaryColor }}>
              <div className="flex items-center gap-3">
                <div className="py-2 px-4 rounded-full font-semibold text-surface" style={{ backgroundColor: formData.primaryColor }}>
                  Button Preview
                </div>
                <span style={{ color: formData.primaryColor }}>Accent text preview</span>
              </div>
            </div>
          </section>

          <section className="bg-surface rounded-2xl p-6 space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Icon id="menu-landmark" width={24} height={24} className="text-primary" />
              Typography
            </h2>

            <div>
              <label className="block text-sm text-white/60 mb-2">Font Family</label>
              <select
                value={formData.fontFamily}
                onChange={(e) => setFormData(prev => ({ ...prev, fontFamily: e.target.value }))}
                className="w-full py-3 px-4 bg-surface-elevated rounded-xl border border-white/10 focus:border-primary outline-none transition-colors cursor-pointer"
              >
                {fontOptions.map(font => (
                  <option key={font.value} value={font.value}>{font.label}</option>
                ))}
              </select>
            </div>
          </section>

          <section className="bg-surface rounded-2xl p-6 space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Icon id="shield" width={24} height={24} className="text-primary" />
              Surveyor Information
            </h2>

            <div>
              <label className="block text-sm text-white/60 mb-2">Surveyor Name</label>
              <input
                type="text"
                value={formData.surveyorName}
                onChange={(e) => setFormData(prev => ({ ...prev, surveyorName: e.target.value }))}
                placeholder="James Brook"
                className="w-full py-3 px-4 bg-surface-elevated rounded-xl border border-white/10 focus:border-primary outline-none transition-colors"
              />
            </div>
          </section>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={handleReset}
              className="flex-1 py-4 px-6 bg-surface rounded-full font-semibold hover:bg-surface-elevated transition-colors"
            >
              Reset to Default
            </button>
            <button
              type="submit"
              className="flex-1 py-4 px-6 bg-primary rounded-full font-semibold text-surface hover:opacity-90 transition-opacity"
            >
              Publish & Preview
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function BuilderPage() {
  return (
    <ThemeProvider>
      <BuilderForm />
    </ThemeProvider>
  );
}
