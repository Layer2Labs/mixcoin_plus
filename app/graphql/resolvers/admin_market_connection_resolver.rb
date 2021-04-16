# frozen_string_literal: true

module Resolvers
  class AdminMarketConnectionResolver < Resolvers::AdminBaseResolver
    argument :after, String, required: false

    type Types::MarketType.connection_type, null: false

    def resolve(*)
      Market.order(ocean_orders_count: :desc, trades_count: :desc, created_at: :desc)
    end
  end
end
