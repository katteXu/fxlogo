import BaseLayout from "@layouts/BaseLayout.astro";
import { Image } from "astro:assets";
import plugin_bg from "@assets/images/plugin-bg.png";
import screenshot_20231114 from "@assets/images/20231114-screenshot.png";
import screenshot_20231204 from "@assets/images/20231204-screenshot.png";
import screenshot_20231124 from "@assets/images/20231124-screenshot.jpg";
import { products } from "./index.astro";

<Fragment>
<BaseLayout pageTitle="zblog主题和插件" meta={{ keywords: "全屏风格" }}>
<div class="w-screen flex items-center justify-center min-h-[350px] bg-[#75add3] pt-[80px]">
<Image src={plugin_bg} alt="plugin" class="h-[350px] object-contain" />
</div>

{/** 内容 */}
<section class="md:py-20 py-10 bg-[#F6F7F9] w-screen">
<div class="md:w-[1200px] m-auto">
<h1 class="text-4xl font-semibold md:ml-0 ml-4">主题 Theme</h1>
<div class="mt-10 flex md:flex-row flex-col gap-6">
<div class="bg-white md:w-1/3 flex flex-col justify-center shadow-md">
<Image src={screenshot_20231114} alt="全屏风格主题" class="h-[220px] w-full bg-gray-200 align-middle object-cover" />
<div class="p-4">
<h2 class="text-2xl text-[#2C2D2F]">全屏风格主题</h2>
<p class="text-lg text-[#A5A6AB] mt-4">
全屏风博客主题 响应式布局 一款博客主题 始终使用的是全屏风格
首层轮播自定切换，或方向键切换 ，右下角有导航dot 2层4张分类图
3层个人简介 可维护多个标签显示 及留言板
</p>
</div>
</div>

<div class="bg-white md:w-1/3 flex flex-col justify-center shadow-md">
<Image src={screenshot_20231204} alt="新闻资讯风格主题" class="h-[220px] w-full bg-gray-200 align-middle object-cover" />
<div class="p-4">
<h2 class="text-2xl text-[#2C2D2F]">新闻资讯风格主题</h2>
<p class="text-lg text-[#A5A6AB] mt-4">
一款简洁的新闻资讯类模板 响应式布局 支持移动端和PC端 可自行配置SEO
首页热门视频中可现实
文章中的video中的视频从而快速了解对一个文章中是存在视频播放的
其他均满足新闻资讯的主题内容
</p>
</div>
</div>

{products.map((product) => (
<Fragment><a href={`/products/zblog/${product.slug}`} class="bg-white md:w-1/3 flex flex-col justify-center shadow-md">
<Image src={product.data.image.url} alt={product.data.image.alt} class="h-[220px] w-full bg-gray-200 align-middle object-cover" />
<div class="p-4 flex-col flex-1">
<h2 class="text-2xl text-[#2C2D2F]">{product.data.title}</h2>
<p class="text-lg text-[#A5A6AB] mt-4">
{product.data.description}
</p>
<div class="mt-auto">
<span>{product.data.author}</span>
<time>{product.data.date}</time>
</div>
</div>
</a></Fragment>
))}
</div>
<h1 class="text-4xl font-semibold mt-16 md:ml-0 ml-4">插件 Plugin</h1>
<div class="mt-10 flex md:flex-row flex-col gap-6">
<div class="bg-white md:w-1/3 flex flex-col justify-center shadow-md">
<Image src={screenshot_20231124} alt="腾讯云对象存储插件" class="h-[220px] w-full bg-gray-200 align-middle object-cover" />
<div class="p-4">
<h2 class="text-2xl text-[#2C2D2F]">腾讯云对象存储插件</h2>
<p class="text-lg text-[#A5A6AB] mt-4">
对腾讯云cos的快捷维护 配置好腾讯云对象存储的密钥ID和密钥Key和AppId
对Bucket管理 可以对Bucket的快捷维护 附件管理
可以对指定Bucket的快捷维护 附件可批量上传，拖拽上传
</p>
</div>
</div>
</div>
</div>
</section>
</BaseLayout>

</Fragment>;
