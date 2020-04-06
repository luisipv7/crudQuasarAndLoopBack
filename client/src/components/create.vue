<template>
  <q-card
    class="my-card"
    flat
    bordered
  >
    <q-card-section horizontal>
      <q-card-section class="col q-gutter-xs">
        <div class="text-overline">Novo (varivel UsuarioOuProduto) </div>
        <q-input
          outlined
          v-model="text"
          label="Nome do Produto"
        />
        <q-input
          outlined
          v-model="text"
          mask="#.##"
          prefix="R$"
          fill-mask="0"
          reverse-fill-mask
          input-class="text-right"
          label="Preço de Venda"
        />
        <q-input
          outlined
          v-model="text"
          mask="#.##"
          prefix="R$"
          fill-mask="0"
          reverse-fill-mask
          input-class="text-right"
          label="Valor de Compra"
        />
        <q-input
          outlined
          v-model="text"
          type="number"
          label="Quantidade em Estoque"
        />
        <q-editor
          v-model="text"
          min-height="5rem"
        />
        <q-editor
          v-model="text"
          min-height="5rem"
        />
      </q-card-section>

      <q-card-section>
        <croppa
          :width="250"
          :height="250"
          canvas-color="#FFFFFF"
          :disable-drag-to-move="true"
          placeholder="Escolher Foto"
          :placeholder-font-size="14"
          placeholder-color="#000"
          :accept="'image/*'"
          :quality="1"
          :disable-scroll-to-zoom="true"
          initial-size="contain"
          :show-remove-button="true"
          :initial-image="Produto.b64FotoProd"
          ref="b64FotoProd"
        />
        <q-card-actions class="q-pt-lg flex flex-center">
          <div class="q-pt-lg">
            <div class="q-pt-lg">
              <div class="q-pt-lg">
                <q-btn
                  push
                  fit
                  label="Salvar"
                />
              </div>
            </div>
          </div>
        </q-card-actions>
      </q-card-section>
    </q-card-section>

    <q-separator />

    <q-card-actions align="between">
      <q-btn
        flat
        round
        icon="keyboard_return"
      />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: 'ComponentName',
  data () {
    return {
      text: 'Descreva aqui o produto',
      Produto: {
        b64FotoProd: ''
      }
    }
  }
}
</script>
<style>
canvas {
  background-color: white;
  border: 2px solid grey;
  border-radius: 8px;
  cursor: pointer;
}
</style>
