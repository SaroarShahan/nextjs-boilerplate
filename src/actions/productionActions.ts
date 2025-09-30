'use server';

import { revalidatePath, revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

import prisma from '~/db';

export async function createProduct(data: ProductPayload) {
  const product = await prisma.product.create({ data });

  revalidatePath('/products', 'page');
  redirect('/products');

  return product;
}

export async function getProducts() {
  const products = await prisma.product.findMany();

  return products;
}

export async function getProduct(productId: number) {
  const product = await prisma.product.findUnique({
    where: { id: productId },
  });

  return product;
}

export async function updateProduct(productId: number, data: ProductPayload) {
  const updatedProduct = await prisma.product.update({
    where: { id: productId },
    data,
  });

  revalidateTag('/products');
  redirect('/products');

  return updatedProduct;
}

export async function deleteProduct(productId: number) {
  await prisma.product.delete({ where: { id: productId } });

  revalidateTag('/products');
  redirect('/products');
}
