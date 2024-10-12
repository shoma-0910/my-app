// src/app/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { Car, Wrench, Zap, Phone, Menu, X } from "lucide-react"

export default function StylishHomepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className={`text-2xl font-bold ${scrollY > 50 ? 'text-primary' : 'text-white'}`}>CSテックベース</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {['ホーム', '製品', 'サービス', 'お問い合わせ'].map((item) => (
                <li key={item}>
                  <a href="#" className={`text-sm font-medium hover:text-primary transition-colors ${scrollY > 50 ? 'text-gray-600' : 'text-white'}`}>{item}</a>
                </li>
              ))}
            </ul>
          </nav>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="text-primary" /> : <Menu className={`${scrollY > 50 ? 'text-primary' : 'text-white'}`} />}
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 md:hidden">
          <div className="container mx-auto px-4 py-8">
            <ul className="space-y-4">
              {['ホーム', '製品', 'サービス', 'お問い合わせ'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-xl font-medium text-gray-800 hover:text-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <main className="flex-grow">
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-primary to-primary-dark text-white overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <img src="/placeholder.svg" alt="高級車の背景" className="w-full h-full object-cover" />
          </div>
          <div className="relative container mx-auto px-4 text-center z-10">
            <h2 className="text-5xl font-bold mb-6 animate-fade-in-up">未来の車、今ここに</h2>
            <p className="text-xl mb-8 animate-fade-in-up animation-delay-300">CSテックベースは、革新的な技術と卓越したデザインで、<br />あなたの毎日をより快適に</p>
            <Button variant="secondary" size="lg" className="animate-fade-in-up animation-delay-600">詳細を見る</Button>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">なぜCSテックベースか</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { icon: Car, title: '革新的デザイン', description: '最先端のデザインで、美しさと機能性を両立' },
                { icon: Zap, title: '高性能エンジン', description: 'パワフルかつ環境に優しい次世代エンジン搭載' },
                { icon: Wrench, title: '充実のサポート', description: '24時間365日、お客様のカーライフをサポート' }
              ].map((feature) => (
                <div key={feature.title} className="bg-gray-50 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
                  <feature.icon className="mx-auto mb-6 text-primary" size={48} />
                  <h3 className="text-2xl font-semibold mb-4 text-center">{feature.title}</h3>
                  <p className="text-gray-600 text-center">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">主要製品</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { name: 'エコスマート', description: '環境に優しい電気自動車。都市生活に最適', image: '/placeholder.svg' },
                { name: 'ファミリークルーザー', description: '広々とした室内空間の多目的車。家族の旅行に最適', image: '/placeholder.svg' },
                { name: 'スポーツGT', description: '高性能スポーツカー。究極の走りを体験', image: '/placeholder.svg' }
              ].map((product) => (
                <div key={product.name} className="bg-white rounded-lg shadow-lg overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button variant="secondary">詳細を見る</Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600">{product.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">お問い合わせ</h2>
                <p className="text-xl mb-8">ご質問やご相談がございましたら、お気軽にお問い合わせください。</p>
                <div className="flex items-center space-x-4 mb-8">
                  <Phone size={24} />
                  <span className="text-2xl font-semibold">0120-123-456</span>
                </div>
                <div className="flex space-x-4">
                  {['Facebook', 'Twitter', 'Instagram'].map((social) => (
                    <a key={social} href="#" className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-colors">
                      <span className="sr-only">{social}</span>
                      {/* アイコンを適切に変更してください */}
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <form className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="mb-6">
                    <Input type="text" placeholder="お名前" className="w-full" />
                  </div>
                  <div className="mb-6">
                    <Input type="email" placeholder="メールアドレス" className="w-full" />
                  </div>
                  <div className="mb-6">
                    <Textarea placeholder="メッセージ" className="w-full" rows={4} />
                  </div>
                  <Button variant="default" size="lg" className="w-full">送信</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">CSテックベース</h3>
              <p className="text-sm text-gray-400">革新的な車で、より良い未来を創造します。</p>
            </div>
            {['会社情報', 'サービス', 'サポート'].map((category) => (
              <div key={category}>
                <h3 className="text-lg font-semibold mb-4">{category}</h3>
                <ul className="space-y-2">
                  {['リンク1', 'リンク2', 'リンク3', 'リンク4'].map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
            <p>&copy; 2024 CSテックベース. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
